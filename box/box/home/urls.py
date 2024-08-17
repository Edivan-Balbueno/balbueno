from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="rich"),
    path('salvar/', views.salvar, name="salvar")
]
