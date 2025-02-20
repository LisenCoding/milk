package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 牛奶信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
@TableName("dangaoxinxi")
public class DangaoxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public DangaoxinxiEntity() {
		
	}
	
	public DangaoxinxiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 牛奶名称
	 */
					
	private String dangaomingcheng;
	
	/**
	 * 牛奶分类
	 */
					
	private String dangaofenlei;
	
	/**
	 * 口味
	 */
					
	private String kouwei;
	
	/**
	 * 封面
	 */
					
	private String fengmian;
	
	/**
	 * 颜色
	 */
					
	private String yanse;
	
	/**
	 * 装饰品
	 */
					
	private String zhuangshipin;
	
	/**
	 * 牛奶容量
	 */
					
	private String dangaochicun;
	
	/**
	 * 上架日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date shangjiariqi;
	
	/**
	 * 牛奶详情
	 */
					
	private String dangaoxiangqing;
	
	/**
	 * 最近点击时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date clicktime;
	
	/**
	 * 点击次数
	 */
					
	private Integer clicknum;
	
	/**
	 * 积分
	 */
					
	private Integer jf;
	
	/**
	 * 价格
	 */
					
	private Float price;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：牛奶名称
	 */
	public void setDangaomingcheng(String dangaomingcheng) {
		this.dangaomingcheng = dangaomingcheng;
	}
	/**
	 * 获取：牛奶名称
	 */
	public String getDangaomingcheng() {
		return dangaomingcheng;
	}
	/**
	 * 设置：牛奶分类
	 */
	public void setDangaofenlei(String dangaofenlei) {
		this.dangaofenlei = dangaofenlei;
	}
	/**
	 * 获取：牛奶分类
	 */
	public String getDangaofenlei() {
		return dangaofenlei;
	}
	/**
	 * 设置：口味
	 */
	public void setKouwei(String kouwei) {
		this.kouwei = kouwei;
	}
	/**
	 * 获取：口味
	 */
	public String getKouwei() {
		return kouwei;
	}
	/**
	 * 设置：封面
	 */
	public void setFengmian(String fengmian) {
		this.fengmian = fengmian;
	}
	/**
	 * 获取：封面
	 */
	public String getFengmian() {
		return fengmian;
	}
	/**
	 * 设置：颜色
	 */
	public void setYanse(String yanse) {
		this.yanse = yanse;
	}
	/**
	 * 获取：颜色
	 */
	public String getYanse() {
		return yanse;
	}
	/**
	 * 设置：装饰品
	 */
	public void setZhuangshipin(String zhuangshipin) {
		this.zhuangshipin = zhuangshipin;
	}
	/**
	 * 获取：装饰品
	 */
	public String getZhuangshipin() {
		return zhuangshipin;
	}
	/**
	 * 设置：牛奶容量
	 */
	public void setDangaochicun(String dangaochicun) {
		this.dangaochicun = dangaochicun;
	}
	/**
	 * 获取：牛奶容量
	 */
	public String getDangaochicun() {
		return dangaochicun;
	}
	/**
	 * 设置：上架日期
	 */
	public void setShangjiariqi(Date shangjiariqi) {
		this.shangjiariqi = shangjiariqi;
	}
	/**
	 * 获取：上架日期
	 */
	public Date getShangjiariqi() {
		return shangjiariqi;
	}
	/**
	 * 设置：牛奶详情
	 */
	public void setDangaoxiangqing(String dangaoxiangqing) {
		this.dangaoxiangqing = dangaoxiangqing;
	}
	/**
	 * 获取：牛奶详情
	 */
	public String getDangaoxiangqing() {
		return dangaoxiangqing;
	}
	/**
	 * 设置：最近点击时间
	 */
	public void setClicktime(Date clicktime) {
		this.clicktime = clicktime;
	}
	/**
	 * 获取：最近点击时间
	 */
	public Date getClicktime() {
		return clicktime;
	}
	/**
	 * 设置：点击次数
	 */
	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}
	/**
	 * 获取：点击次数
	 */
	public Integer getClicknum() {
		return clicknum;
	}
	/**
	 * 设置：积分
	 */
	public void setJf(Integer jf) {
		this.jf = jf;
	}
	/**
	 * 获取：积分
	 */
	public Integer getJf() {
		return jf;
	}
	/**
	 * 设置：价格
	 */
	public void setPrice(Float price) {
		this.price = price;
	}
	/**
	 * 获取：价格
	 */
	public Float getPrice() {
		return price;
	}

}
