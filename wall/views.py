from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view # function based 이기에 데코레이터를 사용한다.
from wall.models import quiz,hair,eye,body_color,body_deco,horn
from wall.serializers import quizSerializer #models안의 quiz와 우리가 만든 serializer 도 가지고 오자.

import random

@api_view(['GET'])
def getquiz(request): 
	quizzes = quiz.objects.all() #여기서 우리가 만든 데이터들을 quizzes에 저장했고, 그걸 보내주기 전에 
	data ={'question':'아무 문제','answer':'아무정답'}														#시리얼라이저로 변환을 해줘야 하니까. 아래 줄을 작성
	serializer = quizSerializer(quizzes, many=True) # serializer생성하고, ItemSerializer 클래스를 사용한다.
	# 여기서 직전에 만든 quiz를 보내주고, many=True라는 건 데이터를 여러개 보내도록 한다는 것이다. 오직 한개의
	#한 개의 데이터만 보내고 싶으면 이 부분은 False로 작성하면 된다.

	return Response(serializer.data)

@api_view(['POST'])
def addquiz(request):
	serializer = quizSerializer(data=request.data) # 데이터가 이 quizSerializer클래스를 통과하고나면
	# 우리는 이 데이터가 유효한지(valid)한지 알 수 있다.
	if serializer.is_valid():
		serializer.save() #save()가 데이터베이스에 새로운 데이터를 생선한다.
	return Response(serializer.data) #그리고 새로 만들어진 데이터를 Response에 넣는다.

def correct(user_answer):
    quizzes = quiz.objects.first()
    correct = quizzes.answer
    
    if(user_answer == correct):
        mixDeer()
        
        
def mixDeer():
    
    deer = []
        
    horn = horn.objects.get(id = random.randint(0,horn.objects.all().count()-1))
    deer.append(horn);
    hair = hair.objects.get(id = random.randint(0,hair.objects.all().count()-1))
    deer.append(hair)
    eye = eye.objects.get(id = random.randint(0,eye.objects.all().count()-1))
    deer.append(eye)
    body_color = body_color.objects.get(id = random.randint(0,body_color.objects.all().count()-1))
    deer.append(body_color)
    body_deco = body_deco.objects.get(id = random.randint(0,body_deco.objects.all().count()-1))
    deer.append(body_deco)
    
    print(deer)
    
    return deer
    
        

    

from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

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

class quizDetail(APIView):
    def get_object(self, pk):
        try:
            return quiz.objects.get(pk=pk)
        except quiz.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        quiz = self.get_object(pk)
        serializer = quizSerializer(quiz)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        quiz = self.get_object(pk)
        serializer = quizSerializer(quiz, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        review = self.get_object(pk)
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)