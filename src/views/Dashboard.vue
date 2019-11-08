<template>
  <v-container>
    <v-row>
      <v-col> Test Test Test</v-col>
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
import ColumnMapping from "../utils/ColumnMapping";
import DummyData from "../utils/DummyData";

export default {
  name: 'Dashboard',
  components: { AgGridVue },
  data() {
    return {
      columnDefs: ColumnMapping,
      rowData: DummyData,
    };
  },
  beforeMount() {

  },
};
</script>
