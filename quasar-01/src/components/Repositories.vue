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


    <div class="layout-view">
      <div class="card">
        <div class="card-content">
          <p class="caption">Detalhes</p>

          <div class="row">

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey">Nome do Usuario:</span>
                <p>Gustavo</p>
              </div>
            </div>

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey">Tipo de Documento:</span>
                <p>CPF</p>
              </div>
            </div>

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey">Validado no Workfinity?</span>
                <p>Sim</p>
              </div>
            </div>

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey">CEP:</span>
                <p>22666999</p>
              </div>
            </div>

          </div>

          <div class="row">

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey"> Email:</span>
                <p>Gustavo@hotmail.com</p>
              </div>
            </div>

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey">Número do Documento:</span>
                <p>99638266015</p>
              </div>
            </div>

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey">Status:</span>
                <p>Habilitado</p>
              </div>
            </div>

            <div class="grow-2">
              <div class="item-content">
                <span class="text-grey">Contratante:</span>
                <p>BANRISUL</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!--<div class="card">
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
      </div>-->
      <!--<div class="card">
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
      </div>-->
      <!--<div class="card">
        <div class="card-content">
          <q-data-table
            :data="table"
            :config="config"
            :columns="columns"
          >
          </q-data-table>
        </div>
      </div>-->
      <!--<div class="card">
        <div class="card-container">
          <div class="row">
            <div class="grow-1">
              <input v-model="username" placeholder="Nome">
            </div>
            <div class="grow-1">
              <input v-model="username" placeholder="Tipo de documento">
            </div>
            <div class="grow-1">
              <input v-model="username" placeholder="Validado no Workfinity">
            </div>
            <div class="grow-1">
              <input v-model="username" placeholder="Email">
            </div>
          </div>
          <div class="row">
            <div class="grow-1">
              <input v-model="username" placeholder="Número do Documento">
            </div>
            <div class="grow-1">
              <input v-model="username" placeholder="Status">
            </div>
            <div class="grow-1">
              <input v-model="username" placeholder="CEP">
            </div>
            <div class="grow-1">
              <input v-model="username" placeholder="Contratante">
            </div>
          </div>
        </div>
      </div>-->
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
          label: 'Nome',
          field: 'nome'
        },
        {
          label: 'Cor',
          field: 'cor'
        },
        {
          label: 'Fabricante',
          field: 'fabricante'
        }
      ],
      table: [
        {cor: 'branco', nome:'gol', fabricante:'ford'},
        {cor: 'preto', nome:'uno', fabricante:'Honda' },
        {cor: 'azul', nome:'fusca', fabricante:'Hyundai'}
      ]
    }
  }
}














</script>
<style>
</style>
