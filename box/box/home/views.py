from django.http import HttpResponse
from django.shortcuts import render
import json
from .models import Artigo
# Create your views here.

def home(request):
    artigo = Artigo.objects.order_by("-id")
    return render(request, 'home.html', {'artigo': artigo})

def salvar(request):
    dados = json.loads(request.body)
    artigo = Artigo(conteudo_artigo=dados['artigo'])
    artigo.save()
    return HttpResponse('1')