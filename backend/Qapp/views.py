from django.shortcuts import render
from django.http import HttpResponse


def Home(request):
    return render(request, 'Qapp/homepage.html')


def Project(request):
    return render(request, 'Qapp/projects.html')


def Post(request):
    return HttpResponse('<h3>Here is one post </h3>')
