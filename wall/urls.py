
#from rest_framework.urlpatterns import format_suffix_patterns

from wall import views
from .views import quizList, quizDetail
from django.urls import path

urlpatterns = [
	path('',quizList.as_view()),
	path('<int:pk>/', quizDetail.as_view()),
	path('get/',views.getquiz),
	path('add/',views.addquiz),]

