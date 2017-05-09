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
        Modelos
      </q-toolbar-title>
    </div>


    <div class="layout-view">

      <!--<div class="card-content">
        <p class="caption">Detalhes</p>

        <div class="row sm-column wrap">
          <div class="width-1of5">
            <span class="text-grey">Nome do Usuario155:</span>
            <p>Gustavo</p>
          </div>
          <div class="width-1of4">
            <span class="text-grey">Nome do Usuario1:</span>
            <p>Gustavo</p>
          </div>
          <div class="width-1of4">
            <span class="text-grey">Nome do Usuario1:</span>
            <p>Gustavo</p>
          </div>
          <div class="width-1of4">
            <span class="text-grey">Nome do Usuario1:</span>
            <p>Gustavo</p>
          </div>
        </div>

        <div class="row large-gutter wrap">

          <div class="column">
            <span class="text-grey">Nome do Usuario2:</span>
            <p>Gustavo</p>
          </div>

          <div class="column">
            <span class="text-grey">Tipo de Documento:</span>
            <p>CPF</p>
          </div>

          <div class="column">
            <span class="text-grey">Validado no Workfinity?</span>
            <p>Sim</p>
          </div>

          <div class="column">
            <span class="text-grey">CEP:</span>
            <p>22666999</p>
          </div>

        </div>

        <div class="row large-gutter wrap">

          <div class="column gutter">

            <div class="order-1">
              <span class="text-grey">Nome do Usuario123:</span>
              <p>Gustavo</p>
            </div>

            <div class="order-3">
              <span class="text-grey">Tipo de Documento:</span>
              <p>CPF</p>
            </div>

            <div class="order-4">
              <span class="text-grey">Validado no Workfinity?</span>
              <p>Sim</p>
            </div>

            <div class="order-2">
              <span class="text-grey">CEP:</span>
              <p>22666999</p>
            </div>

          </div>

          <div class="column gutter">

            <div>
              <span class="text-grey"> Email:</span>
              <p>Gustavo@hotmail.com</p>
            </div>

            <div>
              <span class="text-grey">Número do Documento:</span>
              <p>99638266015</p>
            </div>

            <div>
              <span class="text-grey">Status:</span>
              <p>Habilitado</p>
            </div>

            <div>
              <span class="text-grey">Contratante:</span>
              <p>BANRISUL</p>
            </div>
          </div>

          <div class="column gutter">

            <div class="order-3 auto">
              <span class="text-grey">Validado no Workfinity?</span>
              <p>Sim</p>
            </div>

            <div class="order-2 auto">
              <span class="text-grey">Nome do Usuario:</span>
              <p>Gustavo</p>
            </div>

            <div class="order-4 auto">
              <span class="text-grey">Tipo de Documento:</span>
              <p>CPF</p>
            </div>

            <div class="order-1 auto">
              <span class="text-grey">CEP:</span>
              <p>22666999</p>
            </div>

          </div>

        </div>
      </div>-->

      <!--<div>
        <div class="card-content">
          <p class="caption">Detalhes</p>

          <div class="row sm-column wrap">

            <div class="width-1of5">
              <span class="text-grey">Nome do Usuario:</span>
              <p>Gustavo</p>
            </div>

            <div class="width-1of5">
              <span class="text-grey">Tipo de Documento:</span>
              <p>CPF</p>
            </div>

            <div class="width-1of5">
              <span class="text-grey">Validado no Workfinity?</span>
              <p>Sim</p>
            </div>

            <div class="width-1of5">
              <span class="text-grey">CEP:</span>
              <p>22666999</p>
            </div>

            <div class="width-1of5">
              <span class="text-grey"> Email:</span>
              <p>Gustavo@hotmail.com</p>
            </div>

            <div class="width-1of5">
              <span class="text-grey">Número do Documento:</span>
              <p>99638266015</p>
            </div>

            <div class="width-1of5">
              <span class="text-grey">Status:</span>
              <p>Habilitado</p>
            </div>

            <div class="width-1of5">
              <span class="text-grey">Contratante:</span>
              <p>BANRISUL</p>
            </div>
          </div>

          <div class="row sm-column wrap">
            <span class="text-grey">Descrição:</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique mollis felis at pretium.
              Sed vel condimentum felis, a lacinia tortor. Quisque lacinia, odio nec dignissim iaculis, diam est pretium
              dolor.
            </p>
            <p>
              Morbi ut velit sed mauris lobortis porta nec a lorem. Ut ac risus vitae nunc tempus venenatis eget vel
              risus.
              Ut maximus, nisi et varius suscipit.
            </p>
          </div>

          <div class="row justify-end">
            <div>
              <button class="primary small outline">
                Voltar
              </button>
              <button class="primary small">
                Editar
              </button>
            </div>
          </div>

        </div>
      </div>-->

      <!--<div class="card-content">
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
      </div>-->

      <!--<div class="card-content">
        <p class="caption">Formulário</p>

        <div class="row gutter sm-column wrap">

          <div class="width-1of5">
            <q-select
              class="full-width"
              placeholder="Status"
              type="list"
              v-model="select"
              :options="selectOptions"
            ></q-select>
          </div>

          <div class="width-1of5">
            <q-select
              class="full-width"
              placeholder="Fabricantes"
              type="list"
              v-model="fabricante"
              :options="fabricantes"
            ></q-select>
          </div>

          <div class="width-1of5">
            <q-select
              class="full-width"
              placeholder="Tipo"
              type="list"
              v-model="tipo"
              :options="tipos"
            ></q-select>
          </div>

          <div class="width-1of5">
            <q-select
              class="full-width"
              placeholder="Família de Produto"
              type="list"
              v-model="familiaDeProduto"
              :options="produtos"
            ></q-select>
          </div>

          <div class="width-1of5">
            <input class="full-width" v-model="username" placeholder="Consumível">
          </div>

          <div class="width-1of5">
            <input class="full-width" v-model="username" placeholder="Label Text">
          </div>

          <div class="width-1of5">
            <q-datetime
              placeholder="Date Picker"
              class="full-width"
              v-model="datePicker"
              type="date"
            ></q-datetime>
          </div>

          <div class="width-1of5">
            <q-datetime-range
              placeholder="Date Range"
              class="full-width"
              v-model="dateRage"
              type="date"
            ></q-datetime-range>
          </div>

        </div>
        <div class="row justify-end">
          <div>
            <button class="primary small outline">
              CANCEL
            </button>
            <button class="primary small">
              SUBMIT
            </button>
          </div>
        </div>

      </div>-->

      <!--<div class="card-container">
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
      </div>-->

      <div class="card-content">
        <div class="row wrap gutter">

          <div>
            <p class="caption">Filtros:</p>
          </div>

          <div>
            <chips v-model="chipNome" class="chip label bg-light text-grey-9"
                   v-bind:class="{ 'display-none' : chipNome, 'display-none' : !chipNome }">
              Nome
            <i class="on-right" v-on:click="closeChipNome">close</i>
            </chips>
          </div>
          <div>
            <chips v-model="chipDescricao" class="chip label bg-light text-grey-9"
                   v-bind:class="{ 'display-none' : chipDescricao, 'display-none' : !chipDescricao }">
              Descrição
              <i class="on-right" v-on:click="closeChipDescricao">close</i>
            </chips>
          </div>
          <div>
            <chips v-model="chipFabricante" class="chip label bg-light text-grey-9"
                   v-bind:class="{ 'display-none' : chipFabricante, 'display-none' : !chipFabricante }">
              Fabricante
              <i class="on-right" v-on:click="closeChipFabricante">close</i>
            </chips>
          </div>
          <div>
            <chips v-model="chipDataDeAbertura" class="chip label bg-light text-grey-9"
                   v-bind:class="{ 'display-none' : chipDataDeAbertura, 'display-none' : !chipDataDeAbertura }">
              Data de Abertura
              <i class="on-right" v-on:click="closeChipDataDeAbertura">close</i>
            </chips>
          </div>

        </div>

      </div>
      <div class="card-content">
        <q-data-table
          class="q-table responsive"
          :data="table"
          :config="config"
          :columns="columns"
        >
        </q-data-table>
      </div>

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
      chipNome: true,
      chipDescricao: true,
      chipTipo: true,
      chipFabricante: true,
      chipDataDeAbertura: true,
      dateRage: {to: '', from: ''},
      datePicker: '',
      familiaDeProduto: '',
      produtos: [
        {
          label: 'Roteador',
          value: 'roteador'
        },
        {
          label: 'Acessórios',
          value: 'acessorios'
        }
      ],
      tipo: '',
      tipos: [
        {
          label: '',
          value: ''
        },
        {
          label: 'Parte',
          value: 'parte'
        },
        {
          label: 'Produto',
          value: 'produto'
        }
      ],
      fabricante: '',
      fabricantes: [
        {
          label: '',
          value: ''
        },
        {
          label: 'D-link',
          value: 'd-link'
        },
        {
          label: 'Ingenico',
          value: 'ingenico'
        }
      ],
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
          label: 'Fabricante',
          field: 'fabricante'
        },
        {
          label: 'Tipo',
          field: 'tipo'
        },
        {
          label: 'Família de produtos',
          field: 'familiaDeProdutos'
        },
        {
          label: 'Nome',
          field: 'nome'
        },
        {
          label: 'Status',
          field: 'status'
        }
      ],
      table: [
        {
          fabricante: 'D-Link',
          tipo: 'Acessório',
          familiaDeProdutos: 'Roteador',
          nome: '8000 MOVEL',
          status: 'Habilitado'
        },
        {
          fabricante: 'Genérico',
          tipo: 'Produto',
          familiaDeProdutos: 'POS',
          nome: 'Acqua',
          status: 'Habilitado'},
        {
          fabricante: 'Ingênico',
          tipo: 'Parte',
          familiaDeProdutos: 'Antenas',
          nome: 'Antena 74cm',
          status: 'Habilitado'
        },
        {
          fabricante: 'D-Link',
          tipo: 'Acessório',
          familiaDeProdutos: 'Roteador',
          nome: '8000 MOVEL',
          status: 'Habilitado'
        },
        {
          fabricante: 'Genérico',
          tipo: 'Produto',
          familiaDeProdutos: 'POS',
          nome: 'Acqua',
          status: 'Habilitado'
        },
        {
          fabricante: 'Ingênico',
          tipo: 'Parte',
          familiaDeProdutos: 'Antenas',
          nome: 'Antena 74cm',
          status: 'Habilitado'
        }
      ]
    }
  },
  methods: {
    closeChipNome: function () {
      this.chipNome = !this.chipNome
    },
    closeChipDescricao: function () {
      this.chipDescricao = !this.chipDescricao
    },
    closeChipFabricante: function () {
      this.chipFabricante = !this.chipFabricante
    },
    closeChipDataDeAbertura: function () {
      this.chipDataDeAbertura = !this.chipDataDeAbertura
    }
  }
}

</script>
<style>
  .display-none{
    display: none;
  }
</style>
