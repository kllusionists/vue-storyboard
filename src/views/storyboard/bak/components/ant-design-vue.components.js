const components = [
  {
    id: 'a-page-header-layout-content',
    name: 'div',
    description: 'div',
    value: 'div',
    resize: false,
    attrs: {},
    style: {
      background: '#fff'
    },
    class: [],
    animations: [],
    events: {},
    children: [
      {
        id: 'a-page-header-layout',
        name: 'a-page-header',
        description: 'a-page-header',
        value: '',
        resize: false,
        attrs: {},
        class: ['k-ant-page-header'],
        style: {},
        animations: [],
        events: {},
        children: [
          {
            id: 'a-row-extra',
            name: 'a-row',
            description: 'a-row',
            value: '',
            resize: false,
            slot: 'extra',
            attrs: {
              type: 'flex',
              justify: 'space-between',
              align: 'bottom',
              gutter: { xs: 8, sm: 16, md: 24 }
            },
            class: [],
            style: {},
            animations: [],
            events: {},
            children: [
              {
                id: 'a-col-extra-left',
                name: 'a-col',
                description: 'a-col',
                value: '',
                resize: false,
                attrs: {
                  span: 20
                },
                class: [],
                style: {},
                animations: [],
                events: {},
                children: [
                  {
                    id: 'a-row-extra-left',
                    name: 'a-row',
                    description: 'a-row',
                    value: '',
                    resize: false,
                    attrs: {
                      type: 'flex',
                      justify: 'start',
                      align: 'middle'
                    },
                    class: [],
                    style: {},
                    animations: [],
                    events: {},
                    children: []
                  }
                ]
              },
              {
                id: 'a-col-extra-right',
                name: 'a-col',
                description: 'a-col',
                value: '',
                resize: false,
                attrs: {
                  span: 4
                },
                class: ['k-ant-page-header-extral-right'],
                style: {},
                animations: [],
                events: {},
                children: [
                  {
                    id: 'a-popconfirm-extra-right',
                    name: 'a-popconfirm',
                    description: 'a-popconfirm',
                    value: '',
                    resize: false,
                    attrs: {
                      title: '是否确认删除选中行？一旦删除，数据无法恢复！',
                      okText: '确认',
                      cancelText: '取消',
                      placement: 'bottom'
                    },
                    class: [],
                    style: {},
                    animations: [],
                    events: {},
                    children: [
                      {
                        id: 'a-icon-popconfirm-extra-right',
                        name: 'a-icon',
                        description: 'a-icon',
                        value: '',
                        resize: false,
                        slot: 'icon',
                        attrs: {
                          type: 'exclamation-circle'
                        },
                        class: [],
                        style: {
                          color: '#ff4242'
                        },
                        animations: [],
                        events: {},
                        children: []
                      },
                      {
                        id: 'a-button-tooltip-extra-right-0',
                        name: 'a-button',
                        description: 'a-button',
                        value: '删除',
                        resize: false,
                        attrs: {
                          type: 'danger'
                        },
                        class: [],
                        style: {},
                        animations: [],
                        events: {},
                        children: []
                      }
                    ]
                  },
                  {
                    id: 'a-tooltip-extra-right-1',
                    name: 'a-tooltip',
                    description: 'a-tooltip',
                    value: '',
                    resize: false,
                    attrs: {
                      title: '',
                      placement: 'top'
                    },
                    class: [],
                    style: {},
                    animations: [],
                    events: {},
                    children: [
                      {
                        id: 'a-button-tooltip-extra-right',
                        name: 'a-button',
                        description: 'a-button',
                        value: '新建',
                        resize: false,
                        attrs: {
                          type: 'primary'
                        },
                        class: [],
                        style: {},
                        animations: [],
                        events: {},
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'a-row-page',
            name: 'a-row',
            description: 'a-row',
            value: '',
            resize: false,
            attrs: {
              type: 'flex'
            },
            class: [],
            style: {},
            animations: [],
            events: {},
            children: [
              {
                id: 'a-col-page',
                name: 'a-col',
                description: 'a-col',
                value: '',
                resize: false,
                attrs: {
                  span: 24
                },
                class: [],
                style: {},
                animations: [],
                events: {}
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'a-button',
    name: 'a-button',
    description: 'a-button',
    value: '按钮',
    resize: true,
    attrs: {
      type: 'primary',
      size: 'default',
      disabled: false,
      ghost: false,
      icon: '',
      loading: false,
      shape: '',
      block: false
    },
    class: [],
    style: {},
    animations: [],
    events: {},
    children: []
  }
]
export default components
