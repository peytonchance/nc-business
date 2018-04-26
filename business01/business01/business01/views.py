from django.core import serializers
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.http import JsonResponse
from . import models



def home(request):
    return render(request, "business01/home.html", {
        'businesses': models.Business.objects.all(),
    })

def business_list(request):
    return render(request, "business01/list.html", {
        'businesses': models.Business.objects.all(),
    })

def business(request, pk):
    business = get_object_or_404(models.Business.objects, id=pk)
    context = {
        'business' : business,
    }
    return render(request, "business01/business_detail.html", context)
