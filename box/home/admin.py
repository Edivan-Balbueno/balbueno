from django.contrib import admin
from .models import Artigo
from django_summernote.admin import SummernoteModelAdmin

class ArtigoAdmin(SummernoteModelAdmin):
    list_filter = ('conteudo_artigo',)
    summernote_fields = ('conteudo_artigo',)

admin.site.register(Artigo, ArtigoAdmin)