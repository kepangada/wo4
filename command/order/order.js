module.exports = {
	name: "order",
	category: "order",
	async exec({ sock, msg, args }) {
		try {
			if (!args.length > 0) {
				const secs = [
					{
						title: "Pilihan Order",
						rows: [
							{ title: "VPS", rowId: "#order vpss", description: "List Harga VPS" },
							{ title: "SSH", rowId: "#order sshh", description: "List Harga SSH" },
							{ title: "WEBSHELL", rowId: "#order shell", description: "List Harga Webshell" },
							{ title: "CHEAT", rowId: "#order cheat", description: "List Harga Cheat" },
							
						],
					},
				];
				let str = 'π Silahkan Pilih Melalui Tombol Dibawah\n'
				await sock.sendMessage(msg.from, {
					text: str,
					footer: 'Deadrz Shop β’ DediHumaedi',
					title: "Deadrz Shop",
					buttonText: "LIST SERVICE π",
					sections: secs,
				});
			} else {
				const type = args[0].toLowerCase();
				switch (type) {
					case "vpss":
						var str = 'π LIST HARGA VPS/RDP\n\nπ₯οΈ Ram 1GB/25GB : 20K /Bulan\nπ₯οΈ Ram 2GB/50GB : 30K /Bulan\nπ₯οΈ Ram 2GB/60GB : 35K /Bulan \nπ₯οΈ Ram 4GB/80GB : 50K /Bulan\n\nβ Tidak Ada Tos Tosan , Dan Dijamin Bergaransi';
						var footer = 'Deadrz Shop β’ DediHumaedi';
						var display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini\n${str}`;
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
						            { urlButton: { displayText: "Buy !", url: display } },
					            ],
				            },
				            { quoted: msg }
			            );
						break;
					case "sshh":
						str = 'π LIST HARGA TUNNELING\n\nπΈπ¬ SSH - SGDO 5k / Bulan\nπΈπ¬ Trojan - SGDO 8k / Bulan\nπΈπ¬ Vmess - SGDO 9k / Bulan\nπΈπ¬ ShadowSock - SGDO 8k / Bulan\n\nπ Inject OPOK, TLS, WS, GRPC\n100% Garansi';
	                    display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini \n${str}`;
	                    await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
						            { urlButton: { displayText: "Buy !", url: display } },
					            ],
				            },
				            { quoted: msg }
			            );
			            break;
			        case "shell":
			        	var sh = 'Https 20k / shell';
			        	var sh1 = 'Http 10k / shell';
			        	var sh2 = 'Cpanel https 50k / Cpanel';
			        	var sh3 = 'Cpanel http 30k / Cpanel';
						str = `π LIST HARGA WEBSHELL\n\nπ ${sh} \nπ ${sh1}\nπ ${sh2}\nπ ${sh3}\n\nTentunya Index Aman Semua`;
						display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini \n${str}.`;
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
    								{index: 1, urlButton: {displayText: 'Buy !', url: display}},
    								],
				            },
				            { quoted: msg }
			            );
						break;
					case "cheat":
			        	var ch = '7 Days 50k';
			        	var ch1 = '30 Days 100k';
			        	var ch2 = '60 Days 175K';
						str = `π LIST HARGA CHEAT\n\nTersedia Cheat Mobile Legends\nπ ${ch} \nπ ${ch1}\nπ ${ch2}\n\nTentunya Aman, Anti Banned 100 %`;
						display = `https://api.whatsapp.com/send?phone=+6282125388500&text=Saya Mau beli yg ini \n${str}.`;
						await sock.sendMessage(
	                        msg.from,
	                        {
					            text: str,
					            footer: footer,
					            templateButtons: [
    								{index: 1, urlButton: {displayText: 'Buy !', url: display}},
    								],
				            },
				            { quoted: msg }
			            );
						break;
				}
			}
		} catch (e) {
			await msg.reply(`Something bad happend\n${e.message}`);
		}
	},
};
