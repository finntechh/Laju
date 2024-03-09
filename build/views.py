from django.shortcuts import render, redirect
from django.http import JsonResponse


# Create your views here.

def index(request):
    return redirect('Home/')

def home(request):
    name = "Home"
    ctx = {
        'name': name
    }
    return render(request, 'home.html', ctx)

def news(request):
    name = "News"
    ctx = {
        'name': name
    }
    return render(request, 'news.html', ctx)

def uns(request):
    name = "Über Uns"
    ctx = {
        'name': name
    }
    return render(request, 'uns.html', ctx)

def kontakt(request):
    name = "Kontakt"
    ctx = {
        'name': name
    }
    return render(request, 'kontakt.html', ctx)

def daten(request):
    name = "Datenschutz"
    ctx = {
        'name': name
    }
    return render(request, 'daten.html', ctx)


def impressum(request):
    name = "Impressum"
    ctx = {
        'name': name
    }
    return render(request, 'impressum.html', ctx)

