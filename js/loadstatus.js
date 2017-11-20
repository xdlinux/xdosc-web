$(document).ready(function(){
	$.getJSON("/mirrors/status.json", function(jsondata) {
		$("#status-table").append(
			"<thead class=\"thead-default\">"
			+ "<tr class=\"row\">"
			+ "<th class=\"col-8\">Name</th>"
			+ "<th class=\"col-4\">Last Update (UTC)</th>"
			+ "</tr>"
			+ "</thead>"
		);
		$("#status-table").append("<tbody>");
		for(var name in jsondata){
			var lastUpdate = "-";
			var trClass = "table-danger";
			var statusLabel = "";
			if (jsondata[name].status === 1) {
				lastUpdate = jsondata[name].date;
				statusLabel = "<span class=\"badge badge-info\">syncing</span>"
				trClass = "table-info";
			} else if (jsondata[name].status === 2) {
				lastUpdate = jsondata[name].date;
				if (jsondata[name].exitcode === 0) {
					trClass = "table-light";
					statusLabel = "";
				} else {
					trClass = "table-warning";
					statusLabel = "<span class=\"badge badge-warning\">failed</span>"
				}
			}
			var mirrorLink = "<a href=\"https://linux.xidian.edu.cn/mirrors/" + name + "/\" class=\"text-dark\">" + name + "</a>";
			var helpIcon = "<a href=\"https://linux.xidian.edu.cn/wiki/mirror-help/" + name + "\" class=\"text-primary\"><span class=\"fa fa-info-circle\" aria-hidden=\"true\"></span></a>";
			$("#status-table").append(
				"<tr class=\"row " + trClass + "\">"
				+ "<td class=\"col-8\">" + mirrorLink + helpIcon + "</td>"
				+ "<td class=\"col-4\">" + lastUpdate + statusLabel + "</td>"
				+ "</tr>"
			);
		};
		$("#status-table").append("</tbody>");
	});
});
