const util = {
    formatWatch(value) {
        if (value < 10000) {
            return value;
        }
        return (value / 10000).toFixed(1) + '万'

    }


}
export default util