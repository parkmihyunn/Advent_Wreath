from wall import views
from django.urls import path
<<<<<<< HEAD
from .views import quizList,deerList,present

urlpatterns = [
	path('',quizList.as_view()),
	path('deer/',deerList.as_view()),
	path('detail/<int:pk>/', views.quizDetail, name = 'detail'),
	path('realwreath/',views.RealWreathView.as_view(), name ="realwreathview"),
	path('present/',present.as_view(), name = "presentview"),

]

=======


urlpatterns = [
	path('deer/',views.deerList.as_view(), name='deerlist'),
	path('realwreath/',views.RealWreathView.as_view(), name ="realwreathview"),
	path('ornament/',views.OrnamentView.as_view(), name ='ornament_list'),
	path('solvequestion/',views.SolveQuestion.as_view(), name="solvequestion"),
	#path('present/',PresentView.as_view(), name = "presentview"),
	path('socks/',views.SocksView.as_view(), name="socks")

]




>>>>>>> 484da55050583991e0adfa141bae607a9b085fea
