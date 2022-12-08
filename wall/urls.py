from wall import views
from django.urls import path
from .views import quizList, deerList

urlpatterns = [
	path('',quizList.as_view()),
	path('deer/',deerList.as_view()),
	path('detail/<int:pk>/', views.quizDetail, name = 'detail'),
	path('realwreath/',views.RealWreathView.as_view(), name ="realwreathview"),
]




