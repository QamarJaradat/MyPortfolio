from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home, name='home'),
    path('post/', views.Post, name='post'),
    path('projects/', views.Project, name='posts')


]
