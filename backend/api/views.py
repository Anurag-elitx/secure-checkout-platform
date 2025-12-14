from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products  # Import the products list from products.py
from django.shortcuts import render

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello Angel')

@api_view(['GET'])
def getProducts(request):
    # Log product retrieval
    print('Fetching all products...')
    try:
        return Response(products)
    except Exception as e:
        return Response({'detail': str(e)}, status=500)

# Security: Ensure all responses have CORS headers

