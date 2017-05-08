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

    <!-- <div class="card">
      <div class="card-content">
        <p class="caption">Detalhes</p>
        <div class="list">
          <div class="row">
            <div>
              <div class="item">
                <div class="item-content">
                  Nome do Usuario: Gustavo
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="item-content">
                  Tipo de documento: CPF
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="item-content">
                  Validado no Workfinity? Sim
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="item">
                <div class="item-content">
                  Email: Gustavo@hotmail.com
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="item-content">
                  Número do Documento: 99638266015
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="item-content">
                  Validado no Workfinity? Sim
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="item">
                <div class="item-content">
                  Status: Habilitado
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="item-content">
                  Contratante: BANRISUL
                </div>
              </div>
              </div>
            <div>
              <div class="item">
                <div class="item-content">
                  CEP: 22666999
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <div class="card">
    <div class="card-content">
      <p class="caption">Detalhes</p>
      <div class="list">
        <div class="row">

          <div class="grow-1">
            <div class="item">
              <div class="item-content">
                Nome do Usuario: Gustavo
              </div>
            </div>
          </div>
          <div>
            <div class="item">
              <div class="item-content">
                Tipo de documento: CPF
              </div>
            </div>
          </div>
          <div>
            <div class="item">
              <div class="item-content">
                Validado no Workfinity? Sim
              </div>
            </div>
          </div>

          <div>
            <div class="item">
              <div class="item-content">
                Email: Gustavo@hotmail.com
              </div>
            </div>
          </div>
          <div>
            <div class="item">
              <div class="item-content">
                Número do Documento: 99638266015
              </div>
            </div>
          </div>
          <div>
            <div class="item">
              <div class="item-content">
                Validado no Workfinity? Sim
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div>
            <div class="item">
              <div class="item-content">
                Status:
                 Habilitado
              </div>
            </div>
          </div>
          <div>
            <div class="item">
              <div class="item-content">
                Contratante:
                 BANRISUL
              </div>
            </div>
            </div>
          <div>
            <div class="item">
              <div class="item-content">
                CEP:
                 22666999
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->

<div class="card">
  <div class="card-content">
    <p class="caption">Editar</p>
      <div class="row gutter">

        <div>
          Nome de úsuario:
          <input v-model="username" placeholder="Nome de úsuario">
        </div>
        <div>
            Email: <input v-model="username" placeholder="Email">
        </div>

        <div>
          Status:
          <q-select
            type="list"
            v-model="select"
            :options="selectOptions"
          ></q-select>
        </div>
      </div>
  </div>
</div>

<!-- <q-data-table
  :data="table"
  :config="config"
  :columns="columns"
  v-model= "table"
>
<template slot="table">
  <td>{{ table.name }}</td>
</template>

  <template slot="col-source" scope="cell">
    <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
      Audit
      <q-tooltip>Some data</q-tooltip>
    </span>
    <span v-else class="label text-white bg-negative">{{cell.data}}</span>
  </template>

  <template slot="selection" scope="selection">
    <button class="primary clear" @click="changeMessage(selection)">
      <i>edit</i>
    </button>
    <button class="primary clear" @click="deleteRow(selection)">
      <i>delete</i>
    </button>
  </template>

</q-data-table> -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      select: '',
      selectOptions: [
        {
          label: '',
          value: ''
        },
        {
          label: 'Habilitado',
          value: 'habilitado'
        },
        {
          label: 'Desabilitado',
          value: 'desabilitado'
        }
      ],
      username: '',
      password: '',
      date: '21-10-2016',
      msg: 'Some message',
      config: {
        rowHeight: '50px'
      },
      columns: [
        {
          label: 'Date',
          field: 'isodate',
          width: '100px'
        }
      ],
      table: [
        {name: 'Christopher'},
        {name: 'Andiro'}
      ]
    }
  }
}
</script>
<style>
</style>
