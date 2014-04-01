/**
 * Created by Bli on 2014/4/1.
 */

module.exports = function (sequelize) {

	var RSDA_MASTER = sequelize.define('RSDA_MASTER', {
		name:			{ type: Sequelize.STRING, allowNull: false, defaultValue: "无名氏" },
		py:				{ type: Sequelize.STRING },
		xb:				{ type: Sequelize.STRING },
		csrq:			{ type: Sequelize.DATE },
		nl:				{ type: Sequelize.STRING },
		zzmm:			{ type: Sequelize.STRING },
		mz:				{ type: Sequelize.INTEGER },
		hyzt:			{ type: Sequelize.STRING },
		sfzh:			{ type: Sequelize.STRING },
		xl:				{ type: Sequelize.STRING },
		xw:				{ type: Sequelize.STRING },
		byxx:			{ type: Sequelize.STRING },
		zy:				{ type: Sequelize.STRING },
		bysj:			{ type: Sequelize.DATE },
		ssbm:			{ type: Sequelize.INTEGER },
		zw:				{ type: Sequelize.INTEGER },
		sf:				{ type: Sequelize.STRING },
		xzjb:			{ type: Sequelize.INTEGER },
		gyxz:			{ type: Sequelize.STRING },
		gl:				{ type: Sequelize.BIGINT },
		bdwgl:			{ type: Sequelize.BIGINT },
		zc:				{ type: Sequelize.INTEGER },
		zc_date:		{ type: Sequelize.DATE },
		cjgzdw_date:	{ type: Sequelize.DATE },
		jbdw_date:		{ type: Sequelize.DATE },
		jtdz:			{ type: Sequelize.STRING },
		jg:				{ type: Sequelize.STRING },
		sj:				{ type: Sequelize.STRING },
		dh:				{ type: Sequelize.STRING },
		email:			{ type: Sequelize.STRING },
		zf:				{ type: Sequelize.STRING },
		zzrk:			{ type: Sequelize.STRING },
		zzzhxl:			{ type: Sequelize.STRING },
		gzfffs:			{ type: Sequelize.STRING },
		gzjb:			{ type: Sequelize.STRING },
		jbgz:			{ type: Sequelize.STRING },
		jbgz2:			{ type: Sequelize.STRING },
		glgz:			{ type: Sequelize.STRING },
		qtgz1:			{ type: Sequelize.STRING },
		qtgz2:			{ type: Sequelize.STRING },
		qtgz3:			{ type: Sequelize.STRING },
		bankmc:			{ type: Sequelize.STRING },
		banknumber:		{ type: Sequelize.STRING }
	},{
		classMethods: {
			associate: function (models) {
				RSDA_MASTER.hasOne(models.RSDA_EXTRA);
			}
		}
	});

	return User;
};