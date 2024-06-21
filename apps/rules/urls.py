from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r'category', views.CategoryViewSet)
router.register(r'condition', views.ConditionViewSet)
router.register(r'damage_type', views.DamageTypeViewSet)
router.register(r'feature', views.FeatureViewSet)
router.register(r'language', views.LanguageViewSet)
router.register(r'magic_school', views.MagicSchoolViewSet)
router.register(r'skill', views.SkillViewSet)
router.register(r'property', views.WeaponPropertyViewSet)


urlpatterns = [
    path('', include(router.urls))
]
