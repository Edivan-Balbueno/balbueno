from django.db import models


class Artigo(models.Model) :
    pub_date = models.DateField("Data de publicação")
    titulo_blog = models.CharField(max_length=200)
    conteudo_artigo = models.TextField()