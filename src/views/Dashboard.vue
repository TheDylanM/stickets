<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="display-1">Tickets</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="btn-row-container">
        <div class="input-search-wrapper">
          <v-text-field
            :class="{
              'input-search-expanded': isExpandInputSearch,
              'input-search-not-expanded': !isExpandInputSearch,
            }"
            prepend-inner-icon="search"
            :append-icon="
              isExpandInputSearch ? 'mdi-arrow-left' : 'mdi-arrow-right'
            "
            @click:append="expandInputSearch"
            outlined
            rounded
            dense
          >
          </v-text-field>
        </div>
        <div>
          <v-btn :ripple="false" class="white-text-color" color="purple">
            New
          </v-btn>
          <div class="btn-select-action-wrapper">
            <v-select
              dark
              :items="actions"
              label="Action"
              solo
              background-color="#078b75"
            ></v-select>
          </div>
          <v-btn outlined color="primary">Execute</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ag-grid-vue
          class="ag-theme-balham"
          :columnDefs="columnDefs"
          :rowData="rowData"
          rowSelection="multiple"
        >
        </ag-grid-vue>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { AgGridVue } from 'ag-grid-vue';
import ColumnMapping from '../utils/ColumnMapping';
import DummyData from '../utils/DummyData';

export default {
  name: 'Dashboard',
  components: { AgGridVue },
  data() {
    return {
      columnDefs: ColumnMapping,
      rowData: DummyData,
      actions: ['Finish', 'Edit', 'Delete', 'Request removal'],
      isExpandInputSearch: false,
    };
  },
  methods: {
    expandInputSearch() {
      this.isExpandInputSearch = !this.isExpandInputSearch;
    },
  },
};
</script>

<style lang="scss">
.btn-row-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  * {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .input-search-wrapper {
    margin-right: 20px;
    .v-input__append-inner {
      i,
      :hover {
        transform: scale(1.2);

        color: $color-primary;
      }
    }
    .input-search-not-expanded {
      width: 100px;
    }
    .input-search-expanded {
      width: 100%;
    }
    .v-text-field__details {
      display: none;
    }
  }
  .btn-select-action-wrapper {
    width: 200px;
    margin: 0 10px 0 40px;
    .v-input__slot {
      margin-bottom: 0;
    }
    .v-text-field__details {
      display: none;
    }
  }
}
</style>
