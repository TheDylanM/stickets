<template>
    <v-container>
        <v-row>
            <v-col> Test Test Test</v-col>
        </v-row>
        <v-row>
            <v-col>
                <ag-grid-vue
                        style="width: 500px; height: 500px;"
                        class="ag-theme-balham"
                        :columnDefs="columnDefs"
                        :rowData="rowData"
                >
                </ag-grid-vue>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // @ is an alias to /src
    import { AgGridVue } from 'ag-grid-vue';

    export default {
        name: 'Dashboard',
        components: { AgGridVue },
        data() {
            return {
                columnDefs: null,
                rowData: null,
            };
        },
        beforeMount() {
            this.columnDefs = [
                { headerName: 'Make', field: 'make' },
                { headerName: 'Model', field: 'model' },
                { headerName: 'Price', field: 'price' },
            ];

            this.rowData = [
                { make: 'Toyota', model: 'Celica', price: 35000 },
                { make: 'Ford', model: 'Mondeo', price: 32000 },
                { make: 'Porsche', model: 'Boxter', price: 72000 },
            ];
        },
    };
</script>
