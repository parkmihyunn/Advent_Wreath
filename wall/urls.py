from wall import views
from django.urls import path


urlpatterns = [
	path('deer/',views.deerList.as_view(), name='deerlist'),
	path('realwreath/',views.RealWreathView.as_view(), name ="realwreathview"),
	path('ornament/',views.OrnamentView.as_view(), name ='ornament_list'),
	path('solvequestion/',views.SolveQuestion.as_view(), name="solvequestion"),
	#path('present/',PresentView.as_view(), name = "presentview"),
	path('socks/',views.SocksView.as_view(), name="socks")

]




