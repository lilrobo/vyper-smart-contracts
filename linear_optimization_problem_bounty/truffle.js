module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // match any network id
      from: '0x954e72fdc51Cf919203067406fB337Ed4bDC8CdA', // account address from which to deploy
      gas: 4000000,
    }
  }
}
