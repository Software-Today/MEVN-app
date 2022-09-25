export default {
    methods: {
        playCartSound() {
            let audio = new Audio(base_url + 'audio/success.mp3');
            audio.play();
        },

        translate(en, bn) {
            if (lang == 'bn' && bn != null) {
                return bn;
            }
            return en;
        },

        successMessage(data) {
            this.$swal({
                icon: data.status,
                title: data.status,
                text: data.message,
                timer: 3000,
                timerProgressBar: true
            });

            location.reload();
        },

        validationError(message = 'Please Fillup Form Correctly !!') {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: message,

            });
        }

    },

    mounted() {


    },

    filters: {
        formatPrice: function(value) {
            let money = parseFloat(value).toFixed(2);

            if (lang == 'bn') {
                let bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
                let part = money.toString().split('.');
                let num = "";

                for (let i = 0; i < part[0].length; ++i) {
                    num += bengali[part[0][i]];
                }
                num += '.';
                for (let i = 0; i < part[1].length; ++i) {
                    num += bengali[part[1][i]];
                }
                money = num;
            }

            return money;
        },

        format(value) {
            if (lang == 'bn') {
                let bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
                let num = "";

                for (let i = 0; i < value.length; ++i) {
                    num += bengali[value[i]];
                }

                value = num;
            }

            return value;
        },

        strippedContent: function(string) {
            return string.replace(/<\/?[^>]+>/ig, " ");
        },

        dateToString(datePassed) {
            const newYears = new Date(datePassed);
            const formattedDate = newYears.toDateString().slice(3);
            const valuedate = formattedDate.split(' ');
            // console.log(valuedate);
            return valuedate[1] + ' ' + valuedate[2] + ', ' + valuedate[3];
            // const formattedDate = format(newYears.toDateString(), 'MMM dd, yyyy');
            // return formattedDate;
        }
    }
}