<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:template match="/">
  <html>
  <body>
   <h1 align="center">Employee Data</h1>
        <table align="center">
          <tr align="center" style="background:black;color:white;">
        
            <th rowspan="2">Name</th>
            <th rowspan="2">Phone</th>
            <th colspan="5">Address</th>
            <th rowspan="2">Email</th>

          </tr>
          <tr align="center" style="background:black;color:white;">
			<th>Street</th>
			<th>Buliding Number</th>
			<th>Region</th>
			<th>City</th>
      <th>Country</th>

		  </tr>
    <xsl:for-each select="employees/employee">
    <tr>

      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="phones/phone[@type='mobile']"/></td>
         <td><xsl:value-of select="addresses/address/street"/></td>
		<td><xsl:value-of select="addresses/address/buildingNumber"/></td>
		<td><xsl:value-of select="addresses/address/Region"/></td>
		<td><xsl:value-of select="addresses/address/city"/></td>
		<td><xsl:value-of select="addresses/address/country"/></td>
      <td><xsl:value-of select="email"/></td>
    </tr>
    </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>