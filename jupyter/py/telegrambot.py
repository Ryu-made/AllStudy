import google.generativeai as genai
# import asyncio # 주피터랩 등에서는 충돌 가능성
import nest_asyncio # 개선된 모듈
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackContext 
from telegram.constants import ParseMode
import re
from dotenv import load_dotenv 
import os 

# .env 파일 로드


# apikey='AIzaSyACbasiJMhnCT_HO9MoahawvPOxKDLRmqA'

def myai(text):
    my_api_key='AIzaSyACbasiJMhnCT_HO9MoahawvPOxKDLRmqA'
    genai.configure(api_key=my_api_key)
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(text)
    print(response.text)
    return response.text

def typeof(s, t):
    res = str(type(s)).split('\'')[1] == t
    return res

nest_asyncio.apply()


# 텔레그램 챗봇 작동 시작
async def start(update: Update, context: CallbackContext):
    await context.bot.send_message(chat_id=update.effective_chat.id, text='# 봇이 가동됨')

async def handle_message(update: Update, context: CallbackContext):
    classmates = ['도형', '상진', '지은', '상혁', '주영']
    kwrds = [
        '대현', '날씨', '안녕', '지금', '심심해', '유성', '빅데이터', '코드', '웹 크롤링', '개발자', 
        ['파이썬', 'python'],
        ['하둡', '스파크', 'hadoop', 'spark'],
        ['점심', '저녁', '메뉴', '음식', '식사', '끼니'], 
        ['gpt', 'ai', '인공지능', '지피티'],
        ['linux', 'ubuntu', '리눅스', '우분투', '가상 머신', 'vm', 'virtual machine'],
        ['command', '명령어'],
        ['java', '자바']
    ]
    rpns = [
        '백엔드 데이터 개발자를 꿈꾸고 있는 학생입니다.\n',
        '옷을 따뜻하게 입으세요.\n',
        '안녕하세요. BOT_Pira입니다.\n',
        '지금은 수업중입니다.\n',
        '밖에 나가서 가벼운 산책 어떠세요-?\n',
        '김유성 강사님은 백엔드 빅데이터를 가르치는 훌륭한 분입니다.^^\n',
        '현재 우리가 배우고 있는 분야입니다. 화이팅!\n',
        '코드를 작성하기 위해 어떤 도움이 필요하시나요?\n',
        '웹 크롤링을 위해서는 되도록 서버 사이드 언어로, 웹페이지 등의 문서구조를 파악하고 원하는 데이터를 분류해서 가져올 수 있어야 합니다.\n',
        '언젠가는 우리가 꿈꾸는 멋있는 개발자가 될 수 있겠죠?\n',
        '텔레그램 챗봇을 위한 명령어 작성 프로그래밍 언어는 Python입니다.\n',
        '하둡과 스파크를 이용하여 데이터를 효율적으로 처리하는 연습을 해봅시다.\n',
        '오늘의 추천 메뉴는? 두둥!\n',
        '이 챗봇이 사용하는 테스트용 AI는 구글의 Gemini입니다!\n',
        '리눅스를 잘 다루려면 먼저 GUI 버전으로 가볍게 테스트하고 나서 명령어 라인 방식을 서서히 익히는 것이 좋습니다.\n리눅스의 운영체제들은 윈도우 버전이나 그래픽 사용자 인터페이스에 특화된 OS보다 대체로 성능이 빠르고 효율적으로 작동합니다.\n',
        '커멘드 라인의 명령어가 궁금하다면 명령어 뒤에 --help 옵션을 붙이면 분명 유용할 것입니다.\n',
        'Java 언어를 이용해서 직접 데이터 분석을 해봅시다!\n',
    ]
    help = 'help'
    
    # 메시지 전체 소문자화
    user_message = update.message.text.lower() # Text, TEXT -> text
    print(user_message)
    
    # 내가 작성할 응답문
    line = '-' + '_-' * 30 + '\n'
    response = line
    
    for mate in classmates:
        if mate in user_message:
            response += f'{mate}은(는) 부산IT아카데미에서 빅데이터 분석 과정을 배우고 있는 학생입니다.\n'
            
    for i, kw in enumerate(kwrds):
        if typeof(kw, 'list'):
            for e in kw:
                if e in user_message:
                    response += rpns[i]
                    break           
        else:
            if kw in user_message:
                response += rpns[i]
    
    response += f'{line}\n\n'
    
    # Gemini API 추가
    response += '    <<Gemini>>    \n'
    response += myai(user_message)
    
    if help == user_message:
        response = f'어떤 도움이 필요하세요?\n{kwrds} 등을 한 번 입력해보세요.'

    # 응답 메시지 전송
    response = response.replace('**', '*').replace('\n*', '\n\*')
    try:
        text = re.sub('([!_.>~+=:\|\{\}\[\]\'\(\)\-])', r'\\\1', response)
        await context.bot.send_message(
        chat_id=update.effective_chat.id, text=text, parse_mode=ParseMode.MARKDOWN_V2
        )
        print('메시지 전송 성공')
    except telegram.error.TelegramError as e:
        print(f'메시지 전송 실패: {e}')
        

async def main():
    load_dotenv(dotenv_path='.env')
    # TELEGRAM_TOKEN = '7621872537:AAHGHX3Ap0Vyrp3CuWJaEOx40vVD6ngrkmI'
    tel_token = os.getenv("TELE_TOKEN")
    if tel_token is None:
        print('TELEGRAMTOKEN 환경변수가 제대로 설정되지 않았습니다.')
        TELEGRAM_TOKEN = '7621872537:AAHGHX3Ap0Vyrp3CuWJaEOx40vVD6ngrkmI'
   
        # print(f'TELEGRAMTOKEN: {tel_token}')
        app = Application.builder().token(TELEGRAM_TOKEN).build() # 빌드 과정
        await app.initialize() # 초기화(필수)
    
        # 핸들러 추가
        app.add_handler(CommandHandler('start', start))
        app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
        
        await app.start()
        print('봇이 실행중입니다.')
        print(app.bot.bot)
        await app.updater.start_polling()

