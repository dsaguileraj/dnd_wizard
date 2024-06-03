from rest_framework.routers import DefaultRouter
from .views import BackgroundViewSet, BondViewSet, FeatureViewSet, FlawViewSet, IdealViewSet, LanguageViewSet, PersonalityViewSet, ProficiencyViewSet

router = DefaultRouter()

router.register(r'background', BackgroundViewSet, 'background')
router.register(r'bond', BondViewSet, 'bond')
router.register(r'feature', FeatureViewSet, 'feature')
router.register(r'flaw', FlawViewSet, 'flaw')
router.register(r'ideal', IdealViewSet, 'ideal')
router.register(r'language', LanguageViewSet, 'language')
router.register(r'personality', PersonalityViewSet, 'personality')
router.register(r'proficiency', ProficiencyViewSet, 'proficiency')

urlpatterns = router.urls
