import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Pages
import CustomerManagement from '../pages/CustomerManagement.vue'
import OrderManagement from '../pages/OrderManagement.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/customer'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/customer',
    children: [
      {
        path: 'customer',
        name: 'Customer',
        component: CustomerManagement
      },
      {
        path: 'order',
        name: 'Order',
        component: OrderManagement
      },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
