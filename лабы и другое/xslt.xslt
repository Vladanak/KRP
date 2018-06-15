<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
          <table border="1">
            <tr bgcolor="white">
              <td align="center">Фамилия</td>
              <td align="center">Имя</td>
              <td align="center">Отчество</td>
              <td align="center">Балл</td>
              <td align="center">Год рождения</td>
            </tr>
            <xsl:for-each select="Gruppa/Odnogrup">
              <xsl:sort order="descending" select="God"/>
              <tr>
                <td>
                  <xsl:value-of select="Familia"/>
                </td>
                <td>
                  <xsl:value-of select="Ima"/>
                </td>
                <td>
                  <xsl:value-of select="Otchestvo"/>
                </td>
                  <xsl:choose>
                    <xsl:when test="Ball>6">
                      <td style="color:red;">
                        <xsl:value-of select="Ball"/>
                      </td>
                    </xsl:when>
                    <xsl:when test="6>Ball">
                      <td style="color:black;">
                        <xsl:value-of select="Ball"/>
                      </td>
                    </xsl:when>
                    <xsl:otherwise>
                      <td style="color:green;">
                        <xsl:value-of select="Ball"/>
                      </td>
                    </xsl:otherwise>
                  </xsl:choose>
                <td>
                  <xsl:value-of select="God"/>
                </td>
              </tr>
            </xsl:for-each>
          </table>
    </xsl:template>
</xsl:stylesheet>
