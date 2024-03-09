from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def app(request):
    return JsonResponse('app', safe=False)
