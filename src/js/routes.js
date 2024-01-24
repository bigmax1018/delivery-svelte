import FirstPage from '../pages/first.svelte';
import WelcomePage from '../pages/welcome.svelte';

import HomePage from '../pages/home.svelte';

import NotFoundPage from '../pages/404.svelte';
import AboutPage from '../pages/about.svelte';
import BlogPage from '../pages/blog.svelte';
import BlogDetailPage from '../pages/blog-detail.svelte';
import BreadCrumbPage from '../pages/breadcrumbs.svelte';
import FakeOrderPage from '../pages/fakeorder.svelte';
import CheckOutPaymentMethodPage from '../pages/checkout-payment-method.svelte';
import CheckOutShippingAddressPage from '../pages/checkout-shipping-address.svelte';
import ColorThemesPage from '../pages/color-themes.svelte';
import ElementsPage from '../pages/elements.svelte';
import ItemDetailsPizzaPage from '../pages/item-details-pizza.svelte';
import ItemDetailsBonPage from '../pages/item-details-bon.svelte';
import ItemDetailsKFCPage from '../pages/item-details-kfc.svelte';
import ItemDetailsPillsPage from '../pages/item-details-pills.svelte';
import ItemDetailsTeaPage from '../pages/item-details-tea.svelte';
import LoginScreenPage from '../pages/login-screen.svelte';
import MasterDetailPage from '../pages/master-detail-detail.svelte';
import MasterDetailMasterPage from '../pages/master-detail-master.svelte';
import MessagesPage from '../pages/messages.svelte';
import MessagesListPage from '../pages/messages-list.svelte';
import NotificationsPage from '../pages/notifications.svelte';
import OrderDetailsPage from '../pages/active-orders.svelte';
import PageLoaderComponentPage from '../pages/page-loader-component.svelte';
import PageTransitionsEffectPage from '../pages/page-transitions-effect.svelte';
import PageTransitionsPage from '../pages/page-transitions.svelte';
import ProductsPage from '../pages/products.svelte';
import ProfilePage from '../pages/profile.svelte';
import RestaurantPage from '../pages/restaurant.svelte';
import RewardsPage from '../pages/rewards.svelte';
import ShoppingCartPage from '../pages/shopping-cart.svelte';
import StoreLocationsPage from '../pages/store-locations.svelte';
import SubNavbarPage from '../pages/subnavbar.svelte';
import TrackingPage from '../pages/tracking.svelte';
import TrackingDonePage from '../pages/tracking-done.svelte';
import WishlistPage from '../pages/wishlist.svelte';
import WriteReviewsPage from '../pages/write-reviews.svelte';

import SigninPage from '../pages/signin.svelte';
import SignUpPage from '../pages/signup.svelte';

var routes = [
  {
    path: '/',
    component: FirstPage,
  },
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/blog/',
    component: BlogPage,
  },
  {
    path: '/blog-detail/',
    component: BlogDetailPage,
  },
  {
    path: '/fakeorder/',
    component: FakeOrderPage,
  },
  {
    path: '/restaurant/',
    component: RestaurantPage,
  },
  {
    path: '/breadcrumbs/',
    component: BreadCrumbPage,
  },
  {
    path: '/checkout-payment-method/',
    component: CheckOutPaymentMethodPage,
  },
  {
    path: '/checkout-shipping-address/',
    component: CheckOutShippingAddressPage,
  },
  {
    path: '/color-themes/',
    component: ColorThemesPage,
  },
  {
    path: '/elements/',
    component: ElementsPage,
  },
  {
    path: '/item-details-pizza/',
    component: ItemDetailsPizzaPage,
  },
  {
    path: '/item-details-kfc/',
    component: ItemDetailsKFCPage,
  },
  {
    path: '/item-details-pills/',
    component: ItemDetailsPillsPage,
  },
  {
    path: '/v-pills/',
    component: ItemDetailsPillsPage,
  },
  {
    path: '/item-details-tea/',
    component: ItemDetailsTeaPage,
  },
  {
    path: '/item-details-bon/',
    component: ItemDetailsBonPage,
  },
  {
    path: '/login-screen/',
    component: LoginScreenPage,
  },
  {
    path: '/messages/',
    component: MessagesPage,
  },
  {
    path: '/messages-list/',
    component: MessagesListPage,
  },
  {
    path: '/checkout-payment-method/',
    component: CheckOutPaymentMethodPage,
  },
  {
    path: '/checkout-shipping-address/',
    component: CheckOutShippingAddressPage,
  },
  {
    path: '/color-themes/',
    component: ColorThemesPage,
  },
  {
    path: '/elements/',
    component: ElementsPage,
  },
  {
    path: '/master-detail/',
    component: MasterDetailMasterPage,
  },
  {
    path: '/notifications/',
    component: NotificationsPage,
  },
  {
    path: '/order-details/',
    component: OrderDetailsPage,
  },
  {
    path: '/page-loader-component/',
    component: PageLoaderComponentPage,
  },
  {
    path: '/page-transitions/:effect',
    component: PageTransitionsEffectPage,
  },
  {
    path: '/page-transitions/',
    component: PageTransitionsPage,
  },
  {
    path: '/products/',
    component: ProductsPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/rewards/',
    component: RewardsPage,
  },
  {
    path: '/shopping-cart/',
    component: ShoppingCartPage,
  },
  {
    path: '/store-locations/',
    component: StoreLocationsPage,
  },
  {
    path: '/subnavbar/',
    component: SubNavbarPage,
  },
  {
    path: '/tracking/',
    component: TrackingPage,
  },
  {
    path: '/tracking-done/',
    component: TrackingDonePage,
  },
  {
    path: '/wishlist/',
    component: WishlistPage,
  },
  {
    path: '/write-reviews/',
    component: WriteReviewsPage,
  },
  {
    path: '/welcome/',
    component: WelcomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/signin/',
    component: SigninPage,
  },
  {
    path: '/signup/',
    component: SignUpPage,
  },
  {
    path: '(.*)',
    component: FirstPage,
  },
];

export default routes;
