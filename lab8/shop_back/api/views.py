from django.http import JsonResponse
from .models import Category, Product


def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse({'product': {
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active
        }})
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)


def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse({'category': {'id': category.id, 'name': category.name}})
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)


def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = {'products': list(products.values())}
    return JsonResponse(data)