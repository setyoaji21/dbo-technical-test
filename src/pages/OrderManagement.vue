<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <b-modal
            id="order-detail"
            title="Order Detail"
            hide-footer
            @close="setSelectedOrder(null)"
            v-if="selectedOrder"
          >
            <b-table-simple small stacked>
              <b-thead>
                <b-tr>
                  <b-th>Product Name</b-th>
                  <b-th>Order Date</b-th>
                  <b-th>Total</b-th>
                  <b-th>Customer Name</b-th>
                  <b-th>Supplier</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-th stacked-heading="Product Name">{{ selectedOrder.product_name }}</b-th>
                  <b-td stacked-heading="Order Date">{{ selectedOrder.order_date | moment('D MMMM YYYY') }}</b-td>
                  <b-td stacked-heading="Total">{{ selectedOrder.total }}</b-td>
                  <b-td stacked-heading="Customer Name">{{ selectedOrder.customer_name }}</b-td>
                  <b-td stacked-heading="Supplier">{{ getSupplier(selectedOrder.supplier_id) }}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-modal>
          <card>
            <div class="row">
              <div class="col-md-8">
                <h4 slot="header" class="card-title">Order List</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-table
                  id="order-list"
                  striped
                  hover
                  responsive
                  :no-border-collapse="false"
                  :items="items"
                  :fields="fields"
                  :per-page="perPage"
                  :current-page="currentPage"
                >
                  <template #cell(order_date)="data">
                    {{ data.item.order_date | moment('D MMMM YYYY') }}
                  </template>
                  <template #cell(action)="data">
                    <b-button variant="primary" class="mr-2" v-b-modal.order-detail @click="setSelectedOrder(data.item)">Detail</b-button>
                  </template>
                </b-table>
              </div>
            </div>
            <div class="row justify-content-end mr-1">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="customer-list"
              ></b-pagination>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Cards/Card.vue";
import orders from '../assets/locales/orders.json';
import suppliers from '../assets/locales/suppliers.json';

export default {
  components: {
    Card,
  },
  data () {
    return {
      fields: [
        {key: 'order_date', sortable: true},
        {key: 'product_name', sortable: true},
        {key: 'total', sortable: true},
        'action',
      ],
      items: orders,
      currentPage: 1,
      perPage: 10,
      selectedOrder: null,
      suppliers: suppliers,
    }
  },
  computed: {
    getToken () {
      return this.$cookies.get('token');
    },
    rows() {
      return this.items.length;
    },
  },
  methods: {
    setSelectedOrder (data) {
      this.selectedOrder = data;
    },
    getSupplier (supplierId) {
      let sup = suppliers.filter((supplier) => {
        return supplier.id == supplierId;
      });
      return sup.length ? sup[0].supplier_name : '-';
    }
  }
}
</script>
