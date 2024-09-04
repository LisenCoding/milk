package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.KouweiDao;
import com.entity.KouweiEntity;
import com.service.KouweiService;
import com.entity.vo.KouweiVO;
import com.entity.view.KouweiView;

@Service("kouweiService")
public class KouweiServiceImpl extends ServiceImpl<KouweiDao, KouweiEntity> implements KouweiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<KouweiEntity> page = this.selectPage(
                new Query<KouweiEntity>(params).getPage(),
                new EntityWrapper<KouweiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<KouweiEntity> wrapper) {
		  Page<KouweiView> page =new Query<KouweiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<KouweiVO> selectListVO(Wrapper<KouweiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public KouweiVO selectVO(Wrapper<KouweiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<KouweiView> selectListView(Wrapper<KouweiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public KouweiView selectView(Wrapper<KouweiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
