const { createLogger, format, transports } = require("winston");


const logging = createLogger({

    transports: [
		new transports.Console(),
		new transports.File({
			level: 'warn',
			filename: 'logWarn.log',
      }),
	  new transports.File({
		level: 'error',
		filename: 'logError.log',
		
  }),
	 ],

	 format: format.combine(
		format.json(),
		format.timestamp(),
		format.prettyPrint(),
		format.metadata()
	 ),

})

module.exports = logging;