import toastr from 'toastr'

let App = {
  render : async () => {
    return (
      toastr.options = {
        "closeButton": false,
        "debug": true,
        "progressBar": false,
        "preventDuplicates": false,
        "timeOut": "0",
        "extendedTimeOut": "0",
        "showDuration": "10000000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
      },
      toastr.info(`
          April 11th, 2019 /
          9:30AM - 12:00PM / Eaton Workshop 1201 K St NW, /
          Washington, DC 20005
        `,

        `Tax the Rich Conference<br />Breakfast + Panel Discussion
        `,

      )
    )
  },
  afterRender: async () => {
    console.log('after rendered')
  }
}

export default App;