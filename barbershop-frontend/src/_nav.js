export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Barbearia',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Serviços',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
      {
          name: 'Equipe',
          url: '/theme/typography',
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
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Novo agendamento',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Editar agendamento',
          url: '/base/cards',
          icon: 'icon-puzzle',
        }
        ]
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Sobre',
    },
      {
          name: 'Mídia',
          url: '/media',
          icon: 'icon-bell',
          children: [
              {
                  name: 'Clientes',
                  url: '/notifications/alerts',
                  icon: 'icon-bell',
              },
              {
                  name: 'Barbearia',
                  url: '/notifications/alerts',
                  icon: 'icon-bell',
              },
              {
                  name: 'Eventos',
                  url: '/notifications/badges',
                  icon: 'icon-bell',
              },
              {
                  name: 'Fotos',
                  url: '/notifications/badges',
                  icon: 'icon-bell',
              },
              {
                  name: 'Vídeos',
                  url: '/notifications/badges',
                  icon: 'icon-bell',
              }
          ],
      },


    {
      name: 'Contato',
      url: '/contact',
      icon: 'icon-star',
    },
  ],
};
