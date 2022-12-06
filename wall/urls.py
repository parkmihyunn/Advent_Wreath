
#from rest_framework.urlpatterns import format_suffix_patterns

from wall import views

from .views import quizList, quizDetail,deerList
from django.urls import path

urlpatterns = [
	path('',quizList.as_view()),
	path('deer/',deerList.as_view()),
	path('detail/<int:pk>/', views.quizDetail, name = 'detail'),
 
 ]




