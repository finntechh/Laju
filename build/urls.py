
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #Paths innerhalb build
    path('Home/', views.home, name="Home"),
    path('News/', views.news, name="News"),
    path('Über Uns/', views.uns, name="Uns"),
    path('Kontakt/', views.kontakt, name="Kontakt"),
    path('Datenschutz/', views.daten, name="Datenschutz"),
    path('Impressum/', views.impressum, name="Impressum"),
]
