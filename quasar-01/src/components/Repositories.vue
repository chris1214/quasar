<template>
  <q-layout>

    <div slot="header" class="toolbar">
      <!-- opens drawer using its ref -->
      <button
        @click="$refs.drawer.open()"
      >
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="2">
        Title
      </q-toolbar-title>
    </div>

    <!-- Left side Drawer -->
    <q-drawer ref="drawer" swipe-only>
      <div class="list platform-delimiter">
        <div class="list-header">
          Left Side Drawer
        </div>
        <q-drawer-link icon="mail" to="/account">Account</q-drawer-link>
        <q-drawer-link icon="alarm" to="/alarms">Alarms</q-drawer-link>
      </div>
    </q-drawer>


    <table class="q-table responsive">
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>In Stock</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td data-th="Name">Item #1</td>
        <td data-th="Price">$10.11</td>
        <td data-th="In Stock">101</td>
      </tr>
      <tr>
        <td data-th="Name">Item #2</td>
        <td data-th="Price">$8.88</td>
        <td class="text-right">34</td>
      </tr>
      <tr>
        <td data-th="Name">Item #3</td>
        <td data-th="Price">$0.15</td>
        <td data-th="In Stock">1670</td>
      </tr>
      </tbody>
    </table>

    <q-data-table
      :data="table"
      :config="config"
      :columns="columns"
    >
    </q-data-table>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      date: '21-10-2016',
      msg: 'Some message',
      config : {
        rowHeight: '50px'
      },
      columns : [
        {
          label: 'Date',
          field: 'isodate',
          width: '100px',
          value: 'name'
        }
      ],
      table : [
        {name: 'Christopher'},
        {name: 'Andiro'}
      ]
    }
  }
}



</script>

<style>
</style>
