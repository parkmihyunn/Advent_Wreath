from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view # function based 이기에 데코레이터를 사용한다.
from wall.models import quiz,deer,mixDeer,user_A,wreath,RealWreath
from wall.serializers import quizSerializer,deerSerializer,mixdeerSerializer,user_ASerializer,wreathSerializer#models안의 quiz와 우리가 만든 serializer 도 가지고 오자.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
import random
from django.http import JsonResponse
import jwt

SECRET_KEY = "christmas"
ALGORITHM = "HS256"

@api_view(['GET'])
def sendWreath(request):
    
    num = 9
    ran = random.randint(1,num)
    wreathes = wreath.objects.get(id = ran) # 오너먼트 테이블에서 아무렇게나 하나 뽑는거
    serializer = wreathSerializer(data = wreathes)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    

def sendMixdeer(): # 완성된 사슴 객체 보내기, 사슴 객체 개수 구해야 함. 랜덤으로
    
    # count = 필드 개수
    # 요소마다 랜덤으로 뽑아서 스키마에 넣고
    # 완성된 사슴 리턴
    
    num = 4
    ran = random.randint(1,num)
    
    _horn = (deer.objects.get(pk = ran)).horn
    
    ran = random.randint(1,num)
    _hair = (deer.objects.get(pk = ran)).hair
    
    ran = random.randint(1,num)
    _eye = (deer.objects.get(pk = ran)).eye
    
    ran = random.randint(1,num)
    _body_color = (deer.objects.get(pk = ran)).body_color
    
    ran = random.randint(1,num)
    _body_deco = (deer.objects.get(pk = ran)).body_deco
    
    
    mixDeer.objects.create(
            m_horn = _horn,
            m_hair = _hair,
            m_eye = _eye,
            m_body_color = _body_color,
            m_body_deco = _body_deco
        )
    
    
    mixDeers = mixDeer.objects.last()
    
    serializer = mixdeerSerializer(mixDeers,many = False)
    
    
    return Response(serializer.data) 


class quizList(APIView):
    def get(self, request):
        quizzes = quiz.objects.all()
        serializer = quizSerializer(quizzes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = quizSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class deerList(APIView):    
    def get(self, request):
        deers = deer.objects.all()
        serializer = deerSerializer(deers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = deerSerializer(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def quizDetail(request, pk):
    
    
    serializer = user_ASerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()   

    quizz = quiz.objects.get(pk = pk)
    user_answer = user_A.objects.last() # 유저의 가장 최근 대답
    
    print(user_answer.answer)
    print(quizz.answer)
    
    if (quizz.answer == user_answer.answer):
        print("맞았습니다.")
        sendWreath()
        return sendMixdeer()
    
    else:
        print("돌아가")

class deerDetail(APIView):
    def get_object(self, pk):
        try:
            return deer.objects.get(pk=pk)
        except deer.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        deer = self.get_object(pk)
        serializer = deerSerializer(deer)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        deer = self.get_object(pk)
        serializer = deerSerializer(deer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        review = self.get_object(pk)
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class RealWreathView(APIView):    
    def get(self, request):
        user_jwt = request.GET.get('jwt',None)
        user_id = jwt.decode(user_jwt,SECRET_KEY,algorithms=ALGORITHM)
        user_wreath = RealWreath.objects.get(user_id = user_id)
        
        datadict = {
                "ornaments" : [
                    user_wreath.orn1,
                    user_wreath.orn2,
                    user_wreath.orn3,
                    user_wreath.orn4,
                    user_wreath.orn5,
                    user_wreath.orn6,
                    user_wreath.orn7,
                ]
            }
        return JsonResponse(datadict)