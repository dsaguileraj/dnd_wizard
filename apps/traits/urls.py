from rest_framework.routers import DefaultRouter
from .views import BackgroundViewSet, BondViewSet, FeatureViewSet, FlawViewSet, IdealViewSet, LanguageViewSet, PersonalityViewSet, ProficiencyViewSet

router = DefaultRouter()

router.register('background', BackgroundViewSet, 'background')
router.register('bond', BondViewSet, 'bond')
router.register('feature', FeatureViewSet, 'feature')
router.register('flaw', FlawViewSet, 'flaw')
router.register('ideal', IdealViewSet, 'ideal')
router.register('language', LanguageViewSet, 'language')
router.register('personality', PersonalityViewSet, 'personality')
router.register('proficiency', ProficiencyViewSet, 'proficiency')

urlpatterns = router.urls
