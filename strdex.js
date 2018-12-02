var Jimp = require('jimp');

module.exports = {
	generate: function(url, alt, my_callback) {
		Jimp.read(url, (err, in_img) => {
            if (err) throw err;
            new Jimp(in_img.bitmap.width, in_img.bitmap.height, (err, out_img) => {
                if (err) throw err;
                var mid_point = Math.floor(in_img.bitmap.width/2)
                if (alt) {
                	in_img.crop(mid_point, 0, mid_point, in_img.bitmap.height);
                	in_img.flip(true, false);
                	out_img.blit(in_img, 0, 0);
                	in_img.flip(true, false);
                	out_img.blit(in_img, mid_point, 0);
                } else {
	                in_img.crop(0, 0, mid_point, in_img.bitmap.height);
	                out_img.blit(in_img, 0, 0);
	                in_img.flip(true, false);
	                out_img.blit(in_img, mid_point, 0);
	            }
                out_img.write("output.png", (err) => {
                	my_callback();
                });
            });
        });
	}
}