from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r'background', views.BackgroundViewSet)
router.register(r'class', views.EntityClassViewSet)
router.register(r'class_table', views.ClassTableViewSet)
router.register(r'race', views.RaceViewSet)

urlpatterns = [
    path('', include(router.urls))
]
