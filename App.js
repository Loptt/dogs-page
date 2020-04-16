var app = new Vue({
    el: "#app",
    data: {
        breed: "",
        foundBreed: "",
        dogImage: "",
        showResult: false,
        showError: false
    },
    methods: {
        getDog: function() {
            let url = `https://dog.ceo/api/breed/${this.breed}/images/random`;
            let settings = {
            method: "GET"
            };

            this.foundBreed = this.breed
    
            fetch(url, settings)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error(response.statusText);
                })
                .then(responseJSON => {
                    this.dogImage = responseJSON.message;
                    this.showResult = true;
                    this.showError = false;
                })
                .catch(error => {
                    this.showError = true;
                    this.showResult = false;
                })
        },
    }
});