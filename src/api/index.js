export default {
  // Не совсем понял пункт сделать json-заглушку и получить через Axios, нужно было просто север поднять?
  // Если что этот пункт могу доделать :)
  getData () {
    return new Promise((resolve) => {
      setTimeout(() => resolve(
        [
          {
            title: 'How often do you visit our site? (1/6)',
            type: 'radio',
            qustions: [
              {
                value: 'month',
                label: 'A couple of times a month'
              },
              {
                value: 'week',
                label: 'Once a week'
              },
              {
                value: 'few_times_week',
                label: 'Few times a week'
              },
              {
                value: 'every_day',
                label: 'Every day'
              },
              {
                value: 'several_time_day',
                label: 'Several times a day'
              }
            ]
          },
          {
            title: 'Are you comfortable using our site? (2/6)',
            type: 'radio',
            qustions: [
              {
                value: 'comfortable',
                label: 'Comfortable',
                transferPage: 4
              },
              {
                value: 'not_very_comfortable',
                label: 'Not very comfortable'
              },
              {
                value: 'very_uncomfortable',
                label: 'Very uncomfortable'
              }
            ]
          },
          {
            title: 'Tell us what exactly you do not like? (3/6)',
            type: 'text'
          },
          {
            title: 'Tell us what you like most about our site? (4/6)',
            type: 'text'
          },
          {
            title: 'What changes would you like? (5/6)',
            type: 'text-checkbox',
            checkbox: [
              {
                value: 'disgn_change',
                label: 'Design change'
              },
              {
                value: 'newsletter',
                label: 'Newsletter'
              },
              {
                value: 'online_consultations',
                label: 'Online consultations'
              },
              {
                value: 'your_answer',
                label: 'Your answer'
              }
            ]
          },
          {
            title: 'Is there anything else you want to tell us? (6/6)',
            type: 'text'
          }
        ]
      ), 1000)
    })
  },
  saveData (data) {
    console.log(data)
    return new Promise((resolve) => {
      setTimeout(() => resolve(
        {
          success: true
        }
      ), 1000)
    })
  }
}