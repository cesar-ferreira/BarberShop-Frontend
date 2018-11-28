export default {
  items: [
    {
      name: 'Barbearia',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Serviços',
      url: '/base/createService',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Agendamento',
      url: '/Base',
      icon: 'icon-puzzle',
      children: [
        {
            name: 'Novo agendamento',
            url: '/base/forms',
            icon: 'icon-puzzle',
        },
        {
          name: 'Horários agendados',
          url: '/table',
          icon: 'icon-puzzle',
        }
        ]
    },
      {
          name: 'Mídia',
          url: '/media',
          icon: 'icon-bell'

      },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Sobre',
    },

    {
      name: 'Contato',
      url: '/contact',
      icon: 'icon-star',
    },
  ],
};
