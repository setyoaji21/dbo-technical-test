<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <b-modal
            id="customer-detail"
            title="Customer Detail"
            hide-footer
            @close="setSelectedCustomer(null)"
            v-if="selectedCustomer"
          >
            <b-table-simple small stacked>
              <b-thead>
                <b-tr>
                  <b-th>First Name</b-th>
                  <b-th>Last Name</b-th>
                  <b-th>Email</b-th>
                  <b-th>Phone</b-th>
                  <b-th>Address</b-th>
                  <b-th>Gender</b-th>
                  <b-th>Age</b-th>
                  <b-th>Registered</b-th>
                  <b-th>Orders</b-th>
                  <b-th>Spent</b-th>
                  <b-th>Job</b-th>
                  <b-th>Hobbies</b-th>
                  <b-th>Married</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-th stacked-heading="First Name">{{ selectedCustomer.first_name }}</b-th>
                  <b-td stacked-heading="Last Name">{{ selectedCustomer.last_name }}</b-td>
                  <b-td stacked-heading="Email">{{ selectedCustomer.email }}</b-td>
                  <b-td stacked-heading="Phone">{{ selectedCustomer.phone }}</b-td>
                  <b-td stacked-heading="Address">{{ selectedCustomer.address }}</b-td>
                  <b-td stacked-heading="Gender">{{ selectedCustomer.gender }}</b-td>
                  <b-td stacked-heading="Age">{{ selectedCustomer.age }}</b-td>
                  <b-td stacked-heading="Registered">{{ selectedCustomer.registered | moment('D MMMM YYYY') }}</b-td>
                  <b-td stacked-heading="Orders">{{ selectedCustomer.orders }}</b-td>
                  <b-td stacked-heading="Spent">$ {{ selectedCustomer.spent }}</b-td>
                  <b-td stacked-heading="Job">{{ selectedCustomer.job }}</b-td>
                  <b-td stacked-heading="Hobbies">{{ selectedCustomer.hobbies }}</b-td>
                  <b-td stacked-heading="Married">{{ selectedCustomer.is_married ? "Married" : "Not Married" }}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-modal>
          <card>
            <div class="row">
              <div class="col-md-8">
                <h4 slot="header" class="card-title">Customer List</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <b-table
                  id="customer-list"
                  striped
                  hover
                  responsive
                  :no-border-collapse="false"
                  :items="items"
                  :fields="fields"
                  :per-page="perPage"
                  :current-page="currentPage"
                >
                  <template #cell(registered)="data">
                    {{ data.item.registered | moment('D MMMM YYYY') }}
                  </template>
                  <template #cell(action)="data">
                    <b-button variant="primary" class="mr-2" v-b-modal.customer-detail @click="setSelectedCustomer(data.item)">Detail</b-button>
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
import customers from '../assets/locales/customers.json';

export default {
  components: {
    Card,
  },
  data () {
    return {
      fields: [
        {key: 'first_name', sortable: true},
        {key: 'last_name', sortable: true},
        {key: 'email', sortable: true},
        {key: 'phone', sortable: true},
        {key: 'address', sortable: true},
        {key: 'gender', sortable: true},
        {key: 'age', sortable: true},
        {key: 'registered', sortable: true},
        'action',
      ],
      items: customers,
      currentPage: 1,
      perPage: 10,
      selectedCustomer: null,
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
    setSelectedCustomer (data) {
      this.selectedCustomer = data;
    }
  }
}
</script>
